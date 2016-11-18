;(ns study-clojure.core)

(ns wonderland
  (:require [clojure.set :as s])
  (:import (java.net InetAddress)))

;(defn common-fav-foods [foods1 foods2]
;  (let [food-set1 (set foods1)
;        food-set2 (set foods2)
;        common-foods (s/intersection food-set1 food-set2 )]
;    (str "Common Foods" common-foods)
;    ))
;
;(common-fav-foods [:key :kk :dd] [:key :aa :bb])
;
;(empty? [:a])
;
; (if true "it is true true" "it is false")
;
;(let [animals (reduce (fn [r x] (if (nil? x) r (conj r x)))
;                 []
;                 [:mouse nil :duck nil nil :lory])]
;  (print animals))
;

;(let [who-atom (atom :caterpillar)]
;  ;(reset! who-atom :chrysalis)
;  (defn change [state]
;    (case state
;      :caterpillar :chrysalis
;      :chrysalis :butterfly
;      :butterfly
;      ))
;  (swap! who-atom change)
;  (swap! who-atom change)
;              (println @who-atom) )
;
;
;(def counter (atom 0))
;
;(println @counter)
;
;(defn inc-print [val]
;  (println val)
;  (inc val))
;
;(let [n 10]
;  (future (dotimes [_ n] (swap! counter inc-print)))
;  (future (dotimes [_ n] (swap! counter inc-print)))
;  (future (dotimes [_ n] (swap! counter inc-print))) )
;

;(def alice-height (ref 3))
;(def right-hand-bites (ref 10))
;
;(println @alice-height)
;
;(defn eat-from-right-hand []
;  (when (pos? @right-hand-bites)
;    (alter right-hand-bites dec)
;    (alter alice-height #(+ % 24)))
;  )
;
;(dosync (eat-from-right-hand))
;
;(println @alice-height)


;(def alice-height (ref 3))
;(def right-hand-bites (ref 10))
;
;(defn eat-from-right-hand []
;  (dosync (when (pos? @right-hand-bites)
;             (alter right-hand-bites dec)
;             (alter alice-height #(+ % 24))
;             )))
;(defn eat-from-right-hand []
;  (dosync (when (pos? @right-hand-bites)
;           (let [a 1]
;                  (alter right-hand-bites dec)
;                  (println a))
;           (let [b 2]
;             (alter alice-height #(+ % 24))
;             (println b)
;             ))))
;(let [n 2]
;  (future (dotimes [_ n] (eat-from-right-hand)))
;  (future (dotimes [_ n] (eat-from-right-hand)))
;  )

;(let [n 2]
;  (future (dotimes [_ n] ((eat-from-right-hand))))          ;hmm...
;  (future (dotimes [_ n] (eat-from-right-hand)))            ;??
;  )
;
;(println (str "alice - " @alice-height))
;(println (str "right - " @right-hand-bites))

(def alice-height (ref 3))
(def right-hand-bites (ref 10))

(defn eat-from-right-hand []
  (dosync (when (pos? @right-hand-bites)
             (commute right-hand-bites dec)
             (commute alice-height #(+ % 24))
             )))


(let [n 2]
  (future (dotimes [_ n] (eat-from-right-hand)))
  (future (dotimes [_ n] (eat-from-right-hand)))
  (future (dotimes [_ n] (eat-from-right-hand)))
  )


(println (str "alice - " @alice-height))
(println (str "right - " @right-hand-bites))

(def x (ref 1))
(def y (ref 1))

(defn new-values []
  (dosync
    (alter x inc)
    (ref-set y (+ 2 @x))
    (println (str "x: " @x " y: " @y))
    ;(throw (Exception. "Boom!"))
    ;(Thread/sleep 10000)
    )
  )

;(defn new-values []
;  (dosync
;    (alter x inc)
;    (ref-set y (+ 2 @x))
;    (println str ("x: " x "y" y)))
;  )


(let [n 2]
  (future (dotimes [_ n] (new-values)))
  (future (dotimes [_ n] (new-values))))

(println @x)
(println @y)

(def who-agent (agent :caterpillar))

(println @who-agent)


(ns caterpillar.network
  (:import (java.net InetAddress)
           (java.util UUID)))

(println (.getHostName (InetAddress/getByName "localhost")))

(def sb (doto (StringBuffer. "who ")
          (.append "are ")
          (.append "you?")))
(println (.toString sb))

(println (str (UUID/randomUUID)))

(println (str (UUID/randomUUID)))



















