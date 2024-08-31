/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hertzbeat.common.script;

import jakarta.annotation.PostConstruct;
import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.hertzbeat.common.support.exception.ScriptLoadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Script executor factory class
 * This code references dromara/liteflow, thanks to the author Bryan.
 */

@Component
public class ScriptExecutorFactory {

	private final Map<String, ScriptExecutor> scriptExecutorMap = new HashMap<>();

	private final String NONE_LANGUAGE = "none";

	@Autowired
	private List<ScriptExecutor> scriptExecutors;

	@PostConstruct
	private void init() {
		for (ScriptExecutor executor : scriptExecutors) {
			scriptExecutorMap.put(executor.scriptType().getDisplayName(), executor);
		}
	}

	public ScriptExecutor getScriptExecutor(String language) {
		if (StringUtils.isBlank(language)) {
			language = NONE_LANGUAGE;
		}

		ScriptExecutor executor = scriptExecutorMap.get(language);

		if (executor == null) {
			throw new ScriptLoadException("script component failed to load");
		}

		return executor;
	}

	public void cleanScriptCache() {
		this.scriptExecutorMap.forEach((key, value) -> value.cleanCache());
	}
}
