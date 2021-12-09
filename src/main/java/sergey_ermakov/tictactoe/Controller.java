package sergey_ermakov.tictactoe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class Controller {
    private String[] a={"","","","","","","","",""};

    @PostMapping("tictactoe/post")
    public void postgame(@RequestBody String[] arr){
        for (int i=0;i<9;i++){
            a[i]=arr[i];
        }
    }

    @GetMapping("tictactoe/get")
    public String[] getgame(){
        return a;
    }
}
