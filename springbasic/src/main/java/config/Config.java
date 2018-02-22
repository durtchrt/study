package config;

import ab.Magician;
import impl.FireMagician;
import impl.IceMagician;
import impl.LightMagician;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean("m1")
    public Magician createFireMagicion() {
        return new FireMagician(100, "불마법사");
    }

    @Bean("m2")
    public Magician createIceMagicion() {
        return new IceMagician(100, "얼음마법사");
    }

    @Bean("m3")
    public Magician createLightMagicion() {
        return new LightMagician(100, "전기마법사");
    }
}
