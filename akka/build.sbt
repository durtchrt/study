name := "akka"

version := "1.0"

scalaVersion := "2.12.1"

//libraryDependencies += "com.typesafe.akka" % "akka-actor_2.11" % "2.4.14"
// https://mvnrepository.com/artifact/ch.qos.logback/logback-classic
libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.1.8"

//http://akka.io/docs/
//Akka 2.4.16 (current stable release) for Scala 2.11 / 2.12 and Java 8+
libraryDependencies += "com.typesafe.akka" % "akka-actor_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-agent_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-camel_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-cluster_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-cluster-metrics_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-cluster-sharding_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-cluster-tools_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-contrib_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-multi-node-testkit_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-osgi_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-persistence_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-persistence-tck_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-remote_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-slf4j_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-stream_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-stream-testkit_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-testkit_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-distributed-data-experimental_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-typed-experimental_2.12" % "2.4.16"
libraryDependencies += "com.typesafe.akka" % "akka-persistence-query-experimental_2.12" % "2.4.16"

//Akka HTTP
libraryDependencies += "com.typesafe.akka" % "akka-http-core_2.12" % "10.0.1"
libraryDependencies += "com.typesafe.akka" % "akka-http_2.12" % "10.0.1"
libraryDependencies += "com.typesafe.akka" % "akka-http-testkit_2.12" % "10.0.1"
libraryDependencies += "com.typesafe.akka" % "akka-http-spray-json_2.12" % "10.0.1"
libraryDependencies += "com.typesafe.akka" % "akka-http-jackson_2.12" % "10.0.1"
libraryDependencies += "com.typesafe.akka" % "akka-http-xml_2.12" % "10.0.1"

//camel-jetty
//libraryDependencies += "com.typesafe.akka" % "akka-camel_2.11" % "2.3.9"
libraryDependencies += "com.typesafe.akka" % "akka-actor_2.12" % "2.4.16"
libraryDependencies += "org.apache.camel" % "camel-jetty" % "2.10.3"
