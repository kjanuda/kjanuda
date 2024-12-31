import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

// Custom exception for invalid temperature input
class InvalidTemperatureException extends Exception {
    public InvalidTemperatureException(String message) {
        super(message);
    }
}

// Temperature Conversion Class
class TemperatureConverter {
    public static double convertTemperature(double temperature, String fromUnit, String toUnit) throws InvalidTemperatureException {
        if (temperature < -273.15) {
            throw new InvalidTemperatureException("Temperature cannot be below absolute zero.");
        }

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

public class TemperatureConversionApp {
    private JFrame frame;
    private JTextField inputField, resultField;
    private JComboBox<String> fromUnitComboBox, toUnitComboBox;

    public TemperatureConversionApp() {
        // Create the frame
        frame = new JFrame("Temperature Converter");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(450, 250);

        // Use GridBagLayout for a more organized structure
        JPanel panel = new JPanel(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(5, 5, 5, 5);
        frame.add(panel);

        // Input temperature
        JLabel inputLabel = new JLabel("Enter Temperature:");
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.anchor = GridBagConstraints.WEST;
        panel.add(inputLabel, gbc);

        inputField = new JTextField(10);
        inputField.setToolTipText("Enter the temperature value to convert.");
        gbc.gridx = 1;
        panel.add(inputField, gbc);

        // From unit selection
        JLabel fromUnitLabel = new JLabel("From Unit:");
        gbc.gridx = 0;
        gbc.gridy = 1;
        panel.add(fromUnitLabel, gbc);

        String[] units = {"Celsius", "Fahrenheit", "Kelvin"};
        fromUnitComboBox = new JComboBox<>(units);
        fromUnitComboBox.setToolTipText("Select the unit of the input temperature.");
        gbc.gridx = 1;
        panel.add(fromUnitComboBox, gbc);

        // To unit selection
        JLabel toUnitLabel = new JLabel("To Unit:");
        gbc.gridx = 0;
        gbc.gridy = 2;
        panel.add(toUnitLabel, gbc);

        toUnitComboBox = new JComboBox<>(units);
        toUnitComboBox.setToolTipText("Select the unit to convert to.");
        gbc.gridx = 1;
        panel.add(toUnitComboBox, gbc);

        // Convert button
        JButton convertButton = new JButton("Convert");
        convertButton.setToolTipText("Click to convert the temperature.");
        gbc.gridx = 0;
        gbc.gridy = 3;
        gbc.gridwidth = 2;
        gbc.fill = GridBagConstraints.HORIZONTAL;
        panel.add(convertButton, gbc);

        // Result field
        JLabel resultLabel = new JLabel("Converted Temperature:");
        gbc.gridx = 0;
        gbc.gridy = 4;
        gbc.gridwidth = 1;
        panel.add(resultLabel, gbc);

        resultField = new JTextField(10);
        resultField.setEditable(false);
        resultField.setToolTipText("The converted temperature will be displayed here.");
        gbc.gridx = 1;
        panel.add(resultField, gbc);

        // Action for convert button
        convertButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    double inputTemperature = Double.parseDouble(inputField.getText());
                    String fromUnit = (String) fromUnitComboBox.getSelectedItem();
                    String toUnit = (String) toUnitComboBox.getSelectedItem();
                    double result = TemperatureConverter.convertTemperature(inputTemperature, fromUnit, toUnit);
                    resultField.setText(String.format("%.2f", result));
                } catch (InvalidTemperatureException | NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Error: " + ex.getMessage(), "Conversion Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        // Show the frame
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        new TemperatureConversionApp();
    }
}
