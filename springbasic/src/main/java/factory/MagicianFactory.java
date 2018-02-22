package factory;

import ab.Magician;
import impl.FireMagician;
import impl.IceMagician;
import impl.LightMagician;

public class MagicianFactory {
    public static Magician createMagician(MagicianType type) {
        switch(type) {
            case Fire: return new FireMagician();
            case Ice: return new IceMagician();
            case Light: return new LightMagician();
            default: throw new IllegalArgumentException();
        }
    }
}
