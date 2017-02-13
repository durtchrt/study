(ns figwheel.connect.dev (:require [figwheel.client] [figwheel.client.utils] [counter.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/counter.core.on-js-reload (apply js/counter.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'counter.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

