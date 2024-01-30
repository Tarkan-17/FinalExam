
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    // constructor 
    //public DatabaseConnection(){super(); }

    public static void main(String[] args) throws SQLException {

        // Verbindung 
        String url = "jdbc:mysql://localhost:3306/configdata";
        String user = "root";
        String password = "Canakkale2010@";

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connection was succesfully ...");


        }catch (ClassNotFoundException e){
            e.printStackTrace();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }
}
