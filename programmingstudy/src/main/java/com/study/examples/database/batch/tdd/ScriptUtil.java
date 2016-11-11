package com.study.examples.database.batch.tdd;

import java.io.*;
import java.util.*;
import java.util.stream.*;

public class ScriptUtil {

	public static Optional<List<String>> read(String path) {
		 return splitScript(readFile(path));
	}

	static Optional<List<String>> splitScript(Optional<String> script) {
		if(script.isPresent()) {
			String s = script.get();
			if("".equals(s)) {
				return Optional.empty();
			}
			String[] sp = s.split(";");
			List<String> strings = Arrays.asList(sp);
			List list = strings.stream().filter(x -> !x.trim().equals("")).collect(Collectors.toList());
			return Optional.of(list);
		}

		return Optional.empty();
	}

	static Optional<String> readFile(String path) {
		if("".equals(path)) {
			return Optional.empty();
		}
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		try (InputStream is = classLoader.getResourceAsStream(path)) {
			if(is == null) {
				return Optional.empty();
			}
			try(BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF8"))) {
				if(br == null) {
					return Optional.empty();
				}
				String line;
				StringBuffer sb = new StringBuffer();
				while( (line = br.readLine()) != null) {
					sb.append(line);
				}
				return Optional.of(sb.toString());
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return Optional.empty();
	}
}
