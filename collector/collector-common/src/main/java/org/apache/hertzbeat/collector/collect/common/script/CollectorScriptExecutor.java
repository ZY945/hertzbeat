package org.apache.hertzbeat.collector.collect.common.script;

import org.apache.hertzbeat.common.script.ScriptExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * CollectorScriptExecutor is used to execute the script files in the collector module.
 */
@Component
public class CollectorScriptExecutor {

    @Autowired
    private ScriptExecutor scriptExecutor;

    public void getScriptText(String scriptName) {
        try {
            scriptExecutor.executeScript(scriptName);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}