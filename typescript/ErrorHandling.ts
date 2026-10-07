function parseNumberInput(input: string): number {
    try {
        const parsed = Number(input);
        if (isNaN(parsed)) {
            throw new Error(`Invalid input: '${input}' is not a valid number.`);
        }
        console.log(`Successfully parsed number: ${parsed}`);
        return parsed;
    } catch (error: any) {
        console.error("An error occurred during parsing:", error.message);
        return 0;
    } finally {
        console.log("Execution of parseNumberInput is complete.\n");
    }
}


parseNumberInput("123");

parseNumberInput("abc");
