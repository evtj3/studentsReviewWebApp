package bert.mvnProj.models;

/**
 * Created by jejeTabadzki on 9/22/2016.
 */
public class MyClass {
    private String myView;
    private String setByConstructor = "value";
    private final String url = "";
    public MyClass() {

    }
    public MyClass(String setByConstructor) {
        this.setByConstructor = setByConstructor;
    }
    public MyClass(String setByConstructor,String myView) {
        this.setByConstructor = setByConstructor;
        this.myView = myView;
    }
    public String getMyView() {
        return myView;
    }
    public void setMyView(String myView) {
        this.myView = myView;
    }
}
