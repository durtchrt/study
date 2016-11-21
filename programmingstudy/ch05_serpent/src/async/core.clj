(ns async.core
  (:gen-class)
  (:require [camel-snake-kebab.core :as csk]))

(println (csk/->snake_case "hello pigen"))




(defn -main [& args]
  (println "hello"))



