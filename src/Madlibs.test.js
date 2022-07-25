import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import Madlibs from "./Madlibs";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";


it("renders without crashing", () => { 
    render(<Madlibs />);
});
describe("Madlibs", () => {
  test("it is a function", () => {
    expect(typeof Madlibs).toBe("function");
    })
    test("it renders a h1", () => {
        render(<Madlibs />);
    });
    test("it renders a p", () => {
        render(<Madlibs />);
        expect(screen.getByText("Fill in the blanks below to create a story!")).toBeInTheDocument();
    });
});

describe('story shows on form submisison', () => {
    it('shows the story on form submission', () => {
        render(<Madlibs />);
        const nounInput = screen.getByLabelText('Noun:');
        fireEvent.change(nounInput, { target: { value: 'cat' } });
        const verbInput = screen.getByLabelText('Verb:');
        fireEvent.change(verbInput, { target: { value: 'run' } });
        const adjectiveInput = screen.getByLabelText('Adjective:');
        fireEvent.change(adjectiveInput, { target: { value: 'blue' } });
        const adverbInput = screen.getByLabelText('Adverb:');
        fireEvent.change(adverbInput, { target: { value: 'quickly' } });
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(screen.getByText("cat run blue and cat run quickly blue... it's crazy!!")).toBeInTheDocument();

    });
})

