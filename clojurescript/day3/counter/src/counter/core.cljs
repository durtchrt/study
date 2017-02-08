(ns counter.core
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

(def counter (r/atom 0))

(defn view []
  [:div
    [:h2 @counter]
    [:button {:on-click #(swap! counter inc)} "+"]])



(r/render-component [view] (.getElementById js/document "app"))
