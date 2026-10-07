public class Main {
    public static void main(String[] args) {

        String str = "convert this sentence to title case";
        String[] words = str.split(" ");

        for (int i = 0; i < words.length; i++) {
            words[i] = Character.toUpperCase(words[i].charAt(0))
                    + words[i].substring(1);
        }

        String result = String.join(" ", words);
        System.out.print("Answer is :");
        System.out.println(result);
    }
}