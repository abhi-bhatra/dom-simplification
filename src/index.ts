import * as fs from 'fs';
import { JSDOM } from 'jsdom';

// Function to lint and write the HTML file
const formatHTML = (inputFile: string, outputFile: string) => {
    try {
        // Read the input HTML file
        const htmlContent = fs.readFileSync(inputFile, 'utf-8');

        // Split the content into lines, remove excessive blank lines, and trim each line
        const lines = htmlContent
            .split('\n')
            .map(line => line.trim())
            .filter(line => line !== '');

        // Reconstruct the HTML content with necessary line breaks
        const formattedHTML = lines.join('\n');

        // Write the updated content to an output file
        fs.writeFileSync(outputFile, formattedHTML, 'utf-8');
        console.log('Formatted HTML file created successfully:', outputFile);
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

// Replace this with your input HTML file path
const inputFilePath = 'D:\\dom-challenge\\src\\dump\\test1.html';

// Function to simplify the DOM for LLM
const simplifyDOM = (originalHTML: string, callback: () => void) => {
    const dom = new JSDOM(originalHTML);
    const document = dom.window.document;

    // Define elements or attributes to remove based on specific criteria
    const elementsToRemove = [
        'style',
        'link',
        'script',
        'meta',
        // Add other selectors you want to remove dynamically
    ];

    const attributesToRemove = [
        'class',
        'hidden',
        'style',
        // Add other attributes you want to remove dynamically
    ];

    // Function to remove elements
    const removeElements = (selectors: string[]) => {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.parentNode?.removeChild(element);
            });
        });
    };

    // Function to remove attributes
    const removeAttributes = (attributes: string[]) => {
        attributes.forEach(attribute => {
            const elementsWithAttribute = document.querySelectorAll(`[${attribute}]`);
            elementsWithAttribute.forEach(element => {
                element.removeAttribute(attribute);
            });
        });
    };

    // Function to remove data attributes
    const removeDataAttributes = () => {
        document.querySelectorAll('*').forEach(element => {
            const attributes = Array.from(element.attributes);
            attributes.forEach(attr => {
                if (attr.name.startsWith('data-')) {
                    element.removeAttribute(attr.name);
                }
            });
        });
    };    

    // Call functions to remove elements and attributes
    removeElements(elementsToRemove);
    removeAttributes(attributesToRemove);
    removeDataAttributes();

    // Get the modified HTML content
    const simplifiedHTML = dom.serialize();

    // Write the simplified HTML to an output file
    fs.writeFile('output.html', simplifiedHTML, err => {
        if (err) {
            console.error('Error writing output file:', err);
        } else {
            console.log('Output file written successfully.');
            callback();
        }
    });
};

// Read the input HTML file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File reading complete.');
        simplifyDOM(data, () => {
            formatHTML('output.html', 'output-lint.html');
        });
    }
});
