package domain;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "SYS_USERS")
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "USER_ID")
    private int id;

    @Column(name = "USER_NAME")
    @NonNull  private String name;

}
