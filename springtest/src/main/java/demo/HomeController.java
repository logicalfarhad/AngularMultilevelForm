package demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by S.M.Farhad on 27/07/2015.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String homeForm(Model model) {
        return "index";
    }

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    @ResponseBody
    public void create(Person person, MultipartFile file) {

        Person p=person;

        MultipartFile f = file;
    }


}