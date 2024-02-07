// Import necessary modules for testing
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
// import { BrowserRouter } from 'react-router-dom';


test('renders_welcome_message', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText("Welcome to IamNeo");
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders_solutions_for_universities', () => {
  const { getByText } = render(<App />);
  const universitiesSolution = getByText("For Universities");
  expect(universitiesSolution).toBeInTheDocument();
});

test('renders_solutions_for_corporates', () => {
  const { getByText } = render(<App />);
  const corporatesSolution = getByText("For Corporates");
  expect(corporatesSolution).toBeInTheDocument();
});
test('renders_navigation_links', () => {
  render(<App />);

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('submits_contact_form_in_contact_page', () => {
  const { getByPlaceholderText, getByRole, getByText } = render(<App />);
  const contactLink = getByText('Contact');
  fireEvent.click(contactLink);

  const emailInput = getByPlaceholderText('Work Email ID *');
  const companyInput = getByPlaceholderText('Company Name *');
  const designationInput = getByPlaceholderText('Designation');
  const firstNameInput = getByPlaceholderText('First Name *');
  const lastNameInput = getByPlaceholderText('Last Name');
  // const countrySelect = getByPlaceholderText('Country *');

  const countrySelect = document.querySelector('select[name="country"]');
  const phoneInput = getByPlaceholderText('Phone *');
  const messageTextarea = getByPlaceholderText('Message *');
  const submitButton = getByRole('button', { name: /submit/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(companyInput, { target: { value: 'Test Company' } });
  fireEvent.change(designationInput, { target: { value: 'Software Engineer' } });
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

  // Select a valid country option instead of the dummy option
  // fireEvent.change(countrySelect, { target: { value: 'USA' } });

  fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
  fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
  fireEvent.change(countrySelect, { target: { value: 'Afghanistan' } }); // Change to the desired country

  // Simulate form submission
  fireEvent.click(submitButton);

  // Add assertions to check form submission behavior
});

test('renders_inception_details_in_about_page', () => {
  const { getByText } = render(<App />);
  const contactLink = getByText('About');
  fireEvent.click(contactLink);
  const inceptionText = getByText(/In 2016, an ambitious team of innovative minds entered the EdTech arena to build solutions that could transfigure the future of education. Founded as Examly, our team skyrocketed towards the goal through precision engineering and the deployment of modern technological attributes. With a timeline of rapid & successive advancements, we are currently iamneo – the leading AI-powered EdTech organisation headquartered in the emerging tech hub of India – Coimbatore./i);
  
  expect(inceptionText).toBeInTheDocument();

});

test('renders_company_information_in_about_page', () => {
  const { getByText } = render(<App />);
  const contactLink = getByText('About');
  fireEvent.click(contactLink);
    const inceptionText2 = getByText("We are an award-winning, 6-year-old EdTech product-based company that offers learning and assessment solutions for universities and enterprises. Driven by a passion for innovation and a commitment to delivering outstanding products, we’ve crafted a suite of tailored solutions (learning, upskilling, recruiting, and assessment) to cater to the unique and varied needs of educational institutes and corporates – all under one roof.")
  expect(inceptionText2).toBeInTheDocument();
});


