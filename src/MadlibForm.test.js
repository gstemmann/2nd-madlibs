import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Madlibs from "./Madlibs";
import MadlibForm from "./MadlibForm";

it("renders without crashing", () => { 
    render(<MadlibForm />);
});

it("renders an input textbox", () => {
    render(<MadlibForm />);
    expect(screen.getByLabelText('Noun:')).toBeInTheDocument();
  
});
