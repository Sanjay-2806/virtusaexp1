import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        
        int choice = scanner.nextInt();
        System.out.print("Enter the temp value: ");
        double temp = scanner.nextDouble();
        if (choice == 1) {
            double fahrenheit = (temp * 9 / 5) + 32;
            System.out.printf("%.2f Celsius is %.2f Fahrenheit%n", temp, fahrenheit);
        } else if (choice == 2) {
            double celsius = (temp - 32) * 5 / 9;
            System.out.printf("%.2f Fahrenheit is %.2f Celsius%n", temp, celsius);
        } else {
            System.out.println("Invalid choice.");
        }
        scanner.close();
    }
}
