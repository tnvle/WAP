package Model;

public class User {
    private String userName;
    private String pwd;

    public User(String userName, String pwd){
        this.userName = userName;
        this.pwd = pwd;
    }

    public String getUserName(){
        return this.userName;
    }

    public String getPwd(){
        return this.pwd;
    }
}
