package org.apache.hertzbeat.collector.collect.plc;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.hertzbeat.collector.collect.AbstractCollect;
import org.apache.hertzbeat.collector.constants.CollectorConstants;
import org.apache.hertzbeat.collector.dispatch.DispatchConstants;
import org.apache.hertzbeat.common.constants.CommonConstants;
import org.apache.hertzbeat.common.entity.job.Metrics;
import org.apache.hertzbeat.common.entity.message.CollectRep;
import org.apache.plc4x.java.api.PlcConnection;
import org.apache.plc4x.java.api.PlcDriverManager;
import org.apache.plc4x.java.api.messages.PlcReadRequest;
import org.apache.plc4x.java.api.messages.PlcReadResponse;
import org.apache.plc4x.java.api.types.PlcResponseCode;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * plc collect
 */
@Slf4j
public class PlcCollectImpl extends AbstractCollect {
    private static final String[] DRIVER_LIST = {"s7", "modbus-tcp"};
    private static final String[] ADDRESS_SYNTAX = {"discrete-input", "coil", "input-register", "holding-register"};

    @Override
    public void preCheck(Metrics metrics) throws IllegalArgumentException {
        if (metrics == null || metrics.getPlc() == null) {
            throw new IllegalArgumentException("PLC collect must have PLC params");
        }
        // check driver name
        if (metrics.getPlc().getDriverName() == null || !ArrayUtils.contains(DRIVER_LIST, metrics.getPlc().getDriverName())) {
            throw new IllegalArgumentException("PLC collect must have valid driver name");
        }
        // check address syntax
        if (!ArrayUtils.contains(ADDRESS_SYNTAX, metrics.getPlc().getAddressSyntax())) {
            throw new IllegalArgumentException("PLC collect must have valid address syntax");
        }
    }

    @Override
    public void collect(CollectRep.MetricsData.Builder builder, long monitorId, String app, Metrics metrics) {
        long startTime = System.currentTimeMillis();
        String connectionString = "modbus-tcp://" + metrics.getPlc().getHost() + ":" + metrics.getPlc().getPort();
        PlcConnection plcConnection;
        List<String> registerAddressList = metrics.getPlc().getRegisterAddresses();
        try {
            plcConnection = PlcDriverManager.getDefault().getConnectionManager().getConnection(connectionString);
            if (!plcConnection.getMetadata().isReadSupported()) {
                log.error("This connection doesn't support reading.");
            }
            // Check if this connection support reading of data.
            if (!plcConnection.getMetadata().isWriteSupported()) {
                log.error("This connection doesn't support writing.");
            }

            // Create a new read request:
            PlcReadRequest.Builder requestBuilder = plcConnection.readRequestBuilder();
            for (int i = 1; i < registerAddressList.size(); i++) {
                requestBuilder.addTagAddress(metrics.getPlc().getAddressSyntax() + "-" + i, registerAddressList.get(i));
            }
            PlcReadRequest readRequest = requestBuilder.build();
            PlcReadResponse response = readRequest.execute().get();
            long responseTime = System.currentTimeMillis() - startTime;

            Map<String, String> resultMap = new HashMap<>();
            for (String tagName : response.getTagNames()) {
                if (response.getResponseCode(tagName) == PlcResponseCode.OK) {
                    int numValues = response.getNumberOfValues(tagName);
                    // If it's just one element, output just one single line.
                    if (numValues == 1) {
                        log.info("{}: {}", tagName, response.getPlcValue(tagName));
                        resultMap.put(tagName, response.getPlcValue(tagName).toString());
                    }
                    // If it's more than one element, output each in a single row.
                    else {
                        log.info("{}获取不到", tagName);
                    }
                } else {
                    log.error("Error[{}]: {}", tagName, response.getResponseCode(tagName).name());
                }
            }
            resultMap.put(CollectorConstants.RESPONSE_TIME, Long.toString(responseTime));
            List<String> aliasFields = metrics.getAliasFields();
            CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
            for (String field : aliasFields) {
                String fieldValue = resultMap.get(field);
                valueRowBuilder.addColumns(Objects.requireNonNullElse(fieldValue, CommonConstants.NULL_VALUE));
            }
            builder.addValues(valueRowBuilder.build());

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String supportProtocol() {
        return DispatchConstants.PROTOCOL_PLC;
    }
}