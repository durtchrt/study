(ns calc.view
  (:require [dommy.core :as dommy :refer-macros [sel1]]
            [calc.model :refer [add]]))


(defn int-value [id]
  (js/parseInt (.-value (sel1 id))))

(defn float-value [id]
  (js/parseFloat (.-value (sel1 id))))

(defn bmi-calc [weight height]
  (let [n (/ weight (* height height))]
    (println height weight n)
    (cond
      (<= n 18.5) "저체중"
      (< n 25) "정상"
      (< n 30) "과체중"
      :else "비만")))

(defn calc []
  (dommy/set-text! (sel1 :#result) (bmi-calc (float-value :#x) (float-value :#y))))

(def view
  [:div
    [:input#x {:placeholder "체중"}]
    [:input#y {:placeholder "키"}]
    [:button {:on-click calc} "결과보기"]
    [:span#result]])
