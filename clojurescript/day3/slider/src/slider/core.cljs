(ns slider.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(println "This text is printed from src/counter/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

;; om, reagent(++)


; (def position (r/atom 0))

(def height (r/atom 0))
(def weight (r/atom 0))
(def bmi-result (r/atom 0))
; (defn view []
;   [:div
;     [:input {:type "range" :min 0 :max 100}
;       {:on-change #(reset! %1 (.-target.value e))}]
;     [:h2 @value]]
;
; (defn view []
;   [:div
;     [:input {:type "range" :min 0 :max 100
;              :style {:width "100%"}
;              :on-change (fn [e]
;                            (swap! position (fn [_] (.-target.value e))))}]
;     [:h2 @position]])

; (defn bmi-calc [weight height]
;   (let [n (/ weight (/ (* height height) 10000))]
;     (println height weight n)
;     (cond
;       (<= n 18.5) "저체중"
;       (< n 25) "정상"
;       (< n 30) "과체중"
;       :else "비만")))

(defn bmi-calc [weight height]
  (let [n (/ weight (/ (* height height) 10000))]
    ; (println height weight n)
    (cond
      (<= n 18.5) 1
      (< n 25) 2
      (< n 30) 3
      :else 4)))


(defn view []
  [:div
    [:input {:type "range" :min 100 :max 200
             :style {:width "100%"}
             :on-change (fn [e]
                           (swap! height (fn [_] (.-target.value e)))
                           (reset! bmi-result (bmi-calc @weight @height)))}]

    [:input {:type "range" :min 0 :max 100
             :style {:width "100%"}
             :on-change (fn [e]
                           (swap! weight (fn [_] (.-target.value e)))
                           (rest! bmi-result (bmi-calc @weight @height)))}]
    [:h2 @height]
    [:h2 @weight]
    [:h2 @bmi-result]])





(r/render-component [view] (.getElementById js/document "app"))
