package bert.mvnProj.controllers;
import bert.mvnProj.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
/**
 * Created by jejeTabadzki on 9/21/2016.
 */
@Controller
public class Main {
    //private static final Logger LOGGER = LoggerFactory.getLogger(HibernateUtil.class);
    //connect to the database through annotation using @Repository
    private MyFormRepository myFormRepository;
    //MyFormRepository( Interface )- MyForm
    //JpaRepository in hibernation
    /*@Autowired
    public Main(MyFormRepository myFormRepository) {
        this.myFormRepository = myFormRepository;
    }
    @RequestMapping(value = "/main", method =RequestMethod.GET)
    public String libero() {

        MyClass myAnotherClass = new MyClass("this is a", "main/dashboard");

        return myAnotherClass.getMyView();
    }
    @RequestMapping(method = RequestMethod.POST, value = "/main")
    public ModelAndView indexPost(@ModelAttribute @Valid MyForm myForm, ModelAndView model,
                                   WebRequest request, HttpServletResponse response, BindingResult bindingresult) {
        if(!bindingresult.hasErrors()) {

            //Session session = HibernateUtil.getSessionFactory().openSession();
            //session.beginTransaction();
            //MyForm myFormInDb = (MyForm) session.get(MyForm.class, myForm.getPost_code());
            myFormRepository.save(myForm);
            model.setViewName("home/homeSignedIn");
        }
        return model;
    }*/
}