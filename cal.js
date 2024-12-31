import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.Scanner;

// Custom exception for invalid temperature input
class InvalidTemperatureException extends Exception {
    public InvalidTemperatureException(String message) {
        super(message);
    }
}

// Temperature Conversion Class
class TemperatureConverter {
    public static double convertTemperature(double temperature, String fromUnit, String toUnit) throws InvalidTemperatureException {
        // Validate the input temperature
        if (temperature < -273.15) {
            throw new InvalidTemperatureException("Temperature cannot be below absolute zero.");
        }

        // Convert from the source unit to Celsius
        double tempInCelsius;
        switch (fromUnit) {
            case "Celsius":
                tempInCelsius = temperature;
                break;
            case "Fahrenheit":
                tempInCelsius = (temperature - 32) * 5 / 9;
                break;
            case "Kelvin":
                tempInCelsius = temperature - 273.15;
                break;
            default:
                throw new InvalidTemperatureException("Invalid from-unit.");
        }

        // Convert from Celsius to the target unit
        double convertedTemperature;
        switch (toUnit) {
            case "Celsius":
                convertedTemperature = tempInCelsius;
                break;
            case "Fahrenheit":
                convertedTemperature = (tempInCelsius * 9 / 5) + 32;
                break;
            case "Kelvin":
                convertedTemperature = tempInCelsius + 273.15;
                break;
            default:
                throw new InvalidTemperatureException("Invalid to-unit.");
        }

        return convertedTemperature;
    }
}

// Temperature Converter GUI
public class TemperatureConversionApp {
    private JFrame frame;
    private JTextField inputField, resultField;
    private JComboBox<String> fromUnitComboBox, toUnitComboBox;

    public TemperatureConversionApp() {
        // Setting up the frame
        frame = new JFrame("Temperature Converter");
        frame.setLayout(new FlowLayout());
        frame.setSize(400, 200);

        // Input field
        JLabel inputLabel = new JLabel("Enter Temperature:");
        inputField = new JTextField(10);
        frame.add(inputLabel);
        frame.add(inputField);

        // From unit selection
        JLabel fromUnitLabel = new JLabel("From Unit:");
        String[] units = {"Celsius", "Fahrenheit", "Kelvin"};
        fromUnitComboBox = new JComboBox<>(units);
        frame.add(fromUnitLabel);
        frame.add(fromUnitComboBox);

        // To unit selection
        JLabel toUnitLabel = new JLabel("To Unit:");
        toUnitComboBox = new JComboBox<>(units);
        frame.add(toUnitLabel);
        frame.add(toUnitComboBox);

        // Convert button
        JButton convertButton = new JButton("Convert");
        frame.add(convertButton);
        convertButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    double inputTemperature = Double.parseDouble(inputField.getText());
                    String fromUnit = (String) fromUnitComboBox.getSelectedItem();
                    String toUnit = (String) toUnitComboBox.getSelectedItem();
                    double result = TemperatureConverter.convertTemperature(inputTemperature, fromUnit, toUnit);
                    resultField.setText(String.format("%.2f", result));
                } catch (InvalidTemperatureException | NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Error: " + ex.getMessage());
                }
            }
        });

        // Result field
        JLabel resultLabel = new JLabel("Converted Temperature:");
        resultField = new JTextField(10);
        resultField.setEditable(false);
        frame.add(resultLabel);
        frame.add(resultField);

        // Setting frame visibility
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        // Launching the GUI application
        new TemperatureConversionApp();
    }
}
