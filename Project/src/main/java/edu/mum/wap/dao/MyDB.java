package edu.mum.wap.dao;

import edu.mum.wap.model.Image;
import edu.mum.wap.model.Product;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class MyDB {

    public static final Map<Integer, Product> productList = new HashMap<>();

    static {
        Product p1 = new Product();
        p1.setProductName("BALENCIAGA");
        p1.setBrand("BALENCIAGA");
        p1.setBriefInformation("Race Runner sneakers");
        p1.setDetailInformation("Balenciaga's Race Runner sneakers are a sports-luxe style with a new-season update in pink and grey colour-blocking. Crafted in Italy from panels of smooth leather, mesh and scuba knit, this tactile pair comes with a supportive rubber sole. Wear them with jeans or a skirt for a bold statement any time of year.");
        p1.setPrice(486.0);
        p1.setProductId(1);
        p1.setImages(Arrays.asList(new Image("BalenWhite.jpg"), new Image("BalenWhite.jpg") ));

        Product p2 = new Product();
        p2.setProductName("BALENCIAGA");
        p2.setBrand("BALENCIAGA");
        p2.setBriefInformation("Race Runner leather sneakers");
        p2.setDetailInformation("Demna Gvasalia's signature touch infuses these Race Runner sneakers with a dose of urban glamour. Panels crafted from leather and elastic are united by the monochrome red color palette. The streamlined sole disguises a wedge heel – perfect for giving fashion uniforms a little lift.");
        p2.setPrice(486.0);
        p2.setProductId(2);
        p2.setImages(Arrays.asList(new Image("BalenRed.jpg"), new Image("BalenRed.jpg") ));

        Product p3 = new Product();
        p3.setProductName("MARNI");
        p3.setBrand("MARNI");
        p3.setBriefInformation("Big Foot mesh and suede sneakers");
        p3.setDetailInformation("Marni's Big Foot sneakers in candy pink mesh and off-white suede exemplifies the brand's directional character. Made in Italy, this style is stacked high on a platform sole with a round toe and tie-up lacing. We love how this bold style looks with anything from off-duty denim to tailored skirts.");
        p3.setPrice(455.0);
        p3.setProductId(3);
        p3.setImages(Arrays.asList(new Image("marni.jpg"), new Image("marni.jpg") ));

        Product p4 = new Product();
        p4.setProductName("MAISON MARGIELA");
        p4.setBrand("MAISON MARGIELA");
        p4.setBriefInformation("Retro Fit satin sneakers");
        p4.setDetailInformation("Show off your style credentials by donning the Retro Fit sneakers from Maison Margiela. This oversized pair arrives in the season's silhouette du jour, and is accented with subversive foam patches. Crafted in a red-and-pink satin finish, and finished with sharply elevated rubbed soles, this style will lend futuristic edge to any ensemble.");
        p4.setPrice(592.0);
        p4.setProductId(4);
        p4.setImages(Arrays.asList(new Image("maison.jpg"), new Image("maison.jpg") ));

//        Product p5 = new Product();
//        p5.setProductName("ACNE STUDIOS");
//        p5.setBrand("ACNE STUDIOS");
//        p5.setBriefInformation("Bartos suede sneakers");
//        p5.setDetailInformation("Borrow from the boys with this pair of soft pink Bartos sneakers from the Acne Studios menswear collection. The retro-cool silhouette has been crafted from tonal panels of suede and leather and come complete with the label's signature emoji branding at the heel counter. Style yours with feminine dresses for an androgynous mix.");
//        p5.setPrice(225.0);
//        p5.setProductId(5);
//        p5.setImages(Arrays.asList(new Image("acne.jpg"), new Image("acne.jpg") ));

        productList.put(1, p1);
        productList.put(2, p2);
        productList.put(3, p3);
        productList.put(4, p4);
//        productList.put(5, p5);


    }
}
