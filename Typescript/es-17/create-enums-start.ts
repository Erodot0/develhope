/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {
    "euro",
    "dollar"
    }
    
    // Update the type for the `currency` property in this interface to use
    // the `Currency` enum.
    
    interface Country {
        name: string;
        currency: Currency;
    }
    
    // Replace the string values for the `currency` properties below with
    
    const countries: Country[] = [
        {
            name: "France",
            currency: Currency.euro,
        },
        {
            name: "United States of America",
            currency: Currency.dollar,
        },
        {
            name: "Italy",
            currency: Currency.euro,
        },
        {
            name: "New Zealand",
            currency:Currency.dollar,
        },
    ];
    
    // Create a string enum named `LanguageStatus`. Use it to replace the
    // string values for the `status` properties in the objects below.
    
    enum LanguageStatus {
        Primary = "primary",
        Secondary = "Secondary"
    }
    const countryLanguages = [
        { language: "Spanish", status: LanguageStatus.Primary },
        { language: "English", status: LanguageStatus.Secondary },
    ];
    
    // ----
    
    export {};
    