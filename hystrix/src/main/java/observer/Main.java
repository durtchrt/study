package observer;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        ObserableValue ov = new ObserableValue(0);
        TextObserver to = new TextObserver(ov);
        ov.addObserver(to);

        ov.setValue(1);
    }



    static class ObserableValue extends Observable {
        private int n = 0;

        public ObserableValue(int n) { this.n = n; }

        public void setValue(int n) {
            this.n = n;
            setChanged();
            notifyObservers();
        }

        public int getValue() {
            return n;
        }
    }

    static class TextObserver implements Observer {
        ObserableValue ov = null;

        public TextObserver(ObserableValue ov) {
            this.ov = ov;
        }

        @Override
        public void update(Observable obs, Object obj) {
            if(obs == ov) {
                System.out.println(ov.getValue());
            }
        }
    }
}
