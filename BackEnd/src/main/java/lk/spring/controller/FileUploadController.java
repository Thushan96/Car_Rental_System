package lk.spring.controller;

import lk.spring.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;


@RestController
@RequestMapping("fileUpload")
@CrossOrigin
public class FileUploadController {

    private static final ArrayList<String> allImages = new ArrayList<>();


    //Formalized end-point to upload files using Spring
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveFile(@RequestPart("nic1") MultipartFile nicf, @RequestPart("nic2") MultipartFile nicb, @RequestPart("license") MultipartFile licenseFile) {
        try {
            // Let's get the project location
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            // Let's create a folder there for uploading purposes, if not exists
            File uploadsDir = new File(projectPath + "/uploads");

            uploadsDir.mkdir();

            // It is time to transfer the file into the newly created dir
            nicf.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + nicf.getOriginalFilename()));
            nicb.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + nicb.getOriginalFilename()));
            licenseFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + licenseFile.getOriginalFilename()));

            allImages.add("uploads/" + nicf.getOriginalFilename());
            allImages.add("uploads/" + nicb.getOriginalFilename());
            allImages.add("uploads/" + licenseFile.getOriginalFilename());

            return new ResponseUtil(200, "Saved", null);


        } catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil(500, e.getMessage(), null);

        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseUtil(500, e.getMessage(), null);
        }

    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllImagesFromDatabase() {
        return new ResponseUtil( 200,"Saved",allImages);
    }
}
