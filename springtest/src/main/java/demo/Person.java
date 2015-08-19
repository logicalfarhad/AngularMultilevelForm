package demo;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by S.M.Farhad on 27/07/2015.
 */
public class Person {
    private int Id;
    private String name;
    private String email;
    private MultipartFile picture;
    public Person(){

    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public MultipartFile getPicture() {
        return picture;
    }

    public void setPicture(MultipartFile picture) {
        this.picture = picture;
    }
}
