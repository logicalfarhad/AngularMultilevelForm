package demo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by S.M.Farhad on 27/07/2015.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String homeForm(Model model) {
        model.addAttribute("greeting", "hello world");
        return "index";
    }
    //List<Person> personList=new ArrayList<Person>();
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    @ResponseBody
   public Person addItem(@RequestBody Person person,@RequestBody Speaker speaker) {
        Person p=person;
        return p;
    }

}