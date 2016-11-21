(ns living-clojure.ch05.serpent-talk.talk-test
  (:require [clojure.test :refer :all]
            [living-clojure.ch05.serpent-talk.talk :refer :all]))

(deftest test-perpent-talk
  (testing "Cries serpent! with a snake_case version of the input"
    (is (= "Serpent! You said:hello_there"
           (serpent-talk "hello there")))))
