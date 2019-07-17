package Model;

import java.util.HashMap;
import java.util.Map;

public class MyDB {
    private Map<String,String> users = new HashMap<>();

    public MyDB(){
        users.put("van1", "111");
        users.put("van2", "222");
        users.put("van3", "333");
    }

    public boolean validate(String userName, String pwd){
        if(!users.containsKey(userName))
            return false;
        if(users.get(userName).compareTo(pwd) != 0)
            return false;

        return true;
    }
}
