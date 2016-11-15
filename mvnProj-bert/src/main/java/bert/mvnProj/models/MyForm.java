package bert.mvnProj.models;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.AssertTrue;
/**
 * Created by jejeTabadzki on 9/21/2016.
 */
@Entity
public class MyForm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotBlank(message = "Please enter a Post Code")
    @NotEmpty(message = "Please enter a Post Code")
    private String post_code;
    @AssertTrue(message = "...")
    private Boolean confirming;

    public String getPost_code() {
        return post_code;
    }

    public void setPost_code(String post_code) {
        this.post_code = post_code;
    }

    public boolean isConfirming(){
        return confirming;
    }
    public void setConfirming(boolean confirming){
        this.confirming = confirming;
    }
}