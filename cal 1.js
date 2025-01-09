import java.util.Scanner;
import java.util.EnumMap;

// Enum to represent different temperature scales
enum TemperatureScale {
    CELSIUS, FAHRENHEIT, KELVIN, RANKINE
}

// Custom exception for invalid conversions


// Class for temperature conversion
class TemperatureConverter {
    private static final EnumMap<TemperatureScale, EnumMap<TemperatureScale, Conversion>> conversions = new EnumMap<>(TemperatureScale.class);

    static {
        for (TemperatureScale scale : TemperatureScale.values()) {
            conversions.put(scale, new EnumMap<>(TemperatureScale.class));
        }
        // Celsius to others
        conversions.get(TemperatureScale.CELSIUS).put(TemperatureScale.FAHRENHEIT, (temp) -> temp * 9 / 5 + 32);
        conversions.get(TemperatureScale.CELSIUS).put(TemperatureScale.KELVIN, (temp) -> temp + 273.15);
        conversions.get(TemperatureScale.CELSIUS).put(TemperatureScale.RANKINE, (temp) -> (temp + 273.15) * 9 / 5);

        // Fahrenheit to others
        conversions.get(TemperatureScale.FAHRENHEIT).put(TemperatureScale.CELSIUS, (temp) -> (temp - 32) * 5 / 9);
        conversions.get(TemperatureScale.FAHRENHEIT).put(TemperatureScale.KELVIN, (temp) -> (temp + 459.67) * 5 / 9);
        conversions.get(TemperatureScale.FAHRENHEIT).put(TemperatureScale.RANKINE, (temp) -> temp + 459.67);

        // Kelvin to others
        conversions.get(TemperatureScale.KELVIN).put(TemperatureScale.CELSIUS, (temp) -> temp - 273.15);
        conversions.get(TemperatureScale.KELVIN).put(TemperatureScale.FAHRENHEIT, (temp) -> temp * 9 / 5 - 459.67);
        conversions.get(TemperatureScale.KELVIN).put(TemperatureScale.RANKINE, (temp) -> temp * 9 / 5);

        // Rankine to others
        conversions.get(TemperatureScale.RANKINE).put(TemperatureScale.CELSIUS, (temp) -> (temp - 491.67) * 5 / 9);
        conversions.get(TemperatureScale.RANKINE).put(TemperatureScale.FAHRENHEIT, (temp) -> temp - 459.67);
        conversions.get(TemperatureScale.RANKINE).put(TemperatureScale.KELVIN, (temp) -> temp * 5 / 9);
    }

    public static double convert(double temperature, TemperatureScale from, TemperatureScale to) throws InvalidConversionException {
        if (from == to) return temperature; // Same scale, no conversion
        Conversion conversion = conversions.get(from).get(to);
        if (conversion == null) {
            throw new InvalidConversionException("Conversion from " + from + " to " + to + " is not supported.");
        }
        return conversion.apply(temperature);
    }

    // Functional interface for conversions
    @FunctionalInterface
    interface Conversion {
        double apply(double temperature);
    }
}

public class ComplexTemperatureConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Enter the temperature value:");
            double temperature = scanner.nextDouble();

            System.out.println("Enter the scale of the input temperature (CELSIUS, FAHRENHEIT, KELVIN, RANKINE):");
            TemperatureScale fromScale = TemperatureScale.valueOf(scanner.next().toUpperCase());

            System.out.println("Enter the scale to convert to (CELSIUS, FAHRENHEIT, KELVIN, RANKINE):");
            TemperatureScale toScale = TemperatureScale.valueOf(scanner.next().toUpperCase());

            double convertedTemperature = TemperatureConverter.convert(temperature, fromScale, toScale);
            System.out.printf("Converted Temperature: %.2f %s%n", convertedTemperature, toScale);

        } catch (IllegalArgumentException e) {
            System.err.println("Invalid scale entered. Please use CELSIUS, FAHRENHEIT, KELVIN, or RANKINE.");
        } catch (InvalidConversionException e) {
            System.err.println(e.getMessage());
        } catch (Exception e) {
            System.err.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}
