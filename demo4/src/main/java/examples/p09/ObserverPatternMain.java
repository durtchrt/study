package examples.p09;

import java.util.*;

import lombok.extern.slf4j.*;

@Slf4j
public class ObserverPatternMain {
    public static void main(String[] args) {
        MainObservable observable = new MainObservable();
        Observer observer1 = new Observer() {
            @Override
            public void update(Observable o, Object msg) {
                log.error("observer1 update: {}", msg);
            }
        };
        Observer observer2 = new Observer() {
            @Override
            public void update(Observable o, Object msg) {
                log.error("observer2 update: {}", msg);
            }
        };
        Observer observer3 = new Observer() {
            @Override
            public void update(Observable o, Object msg) {
                log.error("observer3 update: {}", msg);
            }
        };
        
        observable.addObserver(observer1);
        observable.addObserver(observer2);
        observable.addObserver(observer3);

        observable.notifyObservers("Hello");
        observable.notifyObservers("KSUG");
        observable.notifyObservers("!!!");
    }
}

@Slf4j
class MainObservable extends Observable {
    public void notifyObservers(String msg) {
        log.warn("action: {}", msg);
        setChanged();
        super.notifyObservers(msg);
    }

}



