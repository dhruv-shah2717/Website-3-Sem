/* All Form Valadation */

function contactvalidate() {
    let valid = true;

    const name = document.getElementById("fname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const e_name = document.getElementById("e_fname");
    const e_email = document.getElementById("e_email");
    const e_phone = document.getElementById("e_phone");
    const e_message = document.getElementById("e_message");

    [e_name, e_email, e_phone, e_message].forEach(e => e.textContent = "");
    [name, email, phone, message].forEach(i => i.classList.remove("is-invalid"));

    const nameVal = name.value.trim();
    if (nameVal === "") {
        e_name.textContent = "Name cannot be empty";
        name.classList.add("is-invalid");
        valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameVal)) {
        e_name.textContent = "Name must contain only letters and spaces";
        name.classList.add("is-invalid");
        valid = false;
    }

    const emailVal = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        e_email.textContent = "Email cannot be empty";
        email.classList.add("is-invalid");
        valid = false;
    } else if (!emailPattern.test(emailVal)) {
        e_email.textContent = "Email must be in correct format (e.g. name@example.com)";
        email.classList.add("is-invalid");
        valid = false;
    }

    const phoneVal = phone.value.trim();
    const digits = phoneVal.replace(/\D/g, "");
    if (phoneVal === "") {
        e_phone.textContent = "Phone number cannot be empty";
        phone.classList.add("is-invalid");
        valid = false;
    } else if (!/^\d+$/.test(phoneVal.replace(/\s/g, ""))) {
        e_phone.textContent = "Phone number must contain digits only";
        phone.classList.add("is-invalid");
        valid = false;
    } else if (digits.length !== 10) {
        e_phone.textContent = "Phone number must be exactly 10 digits";
        phone.classList.add("is-invalid");
        valid = false;
    }

    const msgVal = message.value.trim();
    if (msgVal === "") {
        e_message.textContent = "Message cannot be empty";
        message.classList.add("is-invalid");
        valid = false;
    } else if (msgVal.length < 10) {
        e_message.textContent = "Message must be at least 10 characters long";
        message.classList.add("is-invalid");
        valid = false;
    }

    return valid;
}

function loginvalidate() {
    let valid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const e_email = document.getElementById("e_email");
    const e_password = document.getElementById("e_password");

    [e_email, e_password].forEach(e => e.textContent = "");
    [email, password].forEach(i => i.classList.remove("is-invalid"));

    const emailVal = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailVal === "") {
        e_email.textContent = "Email cannot be empty";
        email.classList.add("is-invalid");
        valid = false;
    } else if (!emailPattern.test(emailVal)) {
        e_email.textContent = "Enter a valid email address (e.g. name@example.com)";
        email.classList.add("is-invalid");
        valid = false;
    }

    const passVal = password.value.trim();
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;

    if (passVal === "") {
        e_password.textContent = "Password cannot be empty";
        password.classList.add("is-invalid");
        valid = false;
    } else if (!passPattern.test(passVal)) {
        e_password.textContent =
        "Password must have at least 1 uppercase, 1 lowercase, 1 digit, 1 special symbol, and min 4 characters";
        password.classList.add("is-invalid");
        valid = false;
    }

    return valid;
}

function registervalidate() {
    let valid = true;

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const password_conf = document.getElementById("password_conf");
    const date = document.getElementById("date");

    const e_fname = document.getElementById("e_fname");
    const e_lname = document.getElementById("e_lname");
    const e_email = document.getElementById("e_email");
    const e_phone = document.getElementById("e_phone");
    const e_password = document.getElementById("e_password");
    const e_password_conf = document.getElementById("e_password_conf");
    const e_date = document.getElementById("e_date");

    [e_fname, e_lname, e_email, e_phone, e_password, e_password_conf, e_date].forEach(e => e.textContent = "");
    [fname, lname, email, phone, password, password_conf, date].forEach(i => i.classList.remove("is-invalid"));

    const setError = (el, err, msg) => {
        err.textContent = msg;
        el.classList.add("is-invalid");
        valid = false;
    };

    if (fname.value.trim() === "")
        setError(fname, e_fname, "First name cannot be empty");
    else if (!/^[A-Za-z\s]+$/.test(fname.value))
        setError(fname, e_fname, "First name must contain only letters");

    if (lname.value.trim() === "")
        setError(lname, e_lname, "Last name cannot be empty");
    else if (!/^[A-Za-z\s]+$/.test(lname.value))
        setError(lname, e_lname, "Last name must contain only letters");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "")
        setError(email, e_email, "Email cannot be empty");
    else if (!emailPattern.test(email.value))
        setError(email, e_email, "Enter a valid email (e.g. name@example.com)");

    const digits = phone.value.replace(/\D/g, "");
    if (phone.value.trim() === "")
        setError(phone, e_phone, "Phone number cannot be empty");
    else if (!/^\d+$/.test(phone.value))
        setError(phone, e_phone, "Phone number must contain only digits");
    else if (digits.length !== 10)
        setError(phone, e_phone, "Phone number must be exactly 10 digits");

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;
    if (password.value.trim() === "")
        setError(password, e_password, "Password cannot be empty");
    else if (!passPattern.test(password.value))
        setError(password, e_password, "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special symbol, min 4 chars");

    if (password_conf.value.trim() === "")
        setError(password_conf, e_password_conf, "Please confirm your password");
    else if (password_conf.value !== password.value)
        setError(password_conf, e_password_conf, "Passwords do not match");

    if (date.value === "")
        setError(date, e_date, "Please select your birth date");

    return valid;
}

function discountvalidate() {
    let valid = true;

    const discount = document.getElementById("discount");
    const e_discount = document.getElementById("e_discount");

    e_discount.textContent = "";
    discount.classList.remove("is-invalid");

    if (discount.value.trim() === "") {
        e_discount.textContent = "Coupon code cannot be empty";
        discount.classList.add("is-invalid");
        valid = false;
    }

    return valid;
}

function checkoutvalidate() {
  let valid = true;

  // Fields
  const fname = document.getElementById("first-name");
  const lname = document.getElementById("last-name");
  const country = document.getElementById("country");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const pincode = document.getElementById("pincode");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  // Error spans
  const e_fname = fname.nextElementSibling.querySelector("span");
  const e_lname = lname.nextElementSibling.querySelector("span");
  const e_country = country.nextElementSibling.querySelector("span");
  const e_address = address.nextElementSibling.querySelector("span");
  const e_city = city.nextElementSibling.querySelector("span");
  const e_state = state.nextElementSibling.querySelector("span");
  const e_pincode = pincode.nextElementSibling.querySelector("span");
  const e_phone = phone.nextElementSibling.querySelector("span");
  const e_email = email.nextElementSibling.querySelector("span");

  // Clear previous errors
  document.querySelectorAll(".error span").forEach(e => e.textContent = "");
  document.querySelectorAll(".Dinput").forEach(i => i.classList.remove("is-invalid"));

  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;
  const pinPattern = /^[0-9]{6}$/;

  // First name
  if (fname.value.trim() === "" || !namePattern.test(fname.value)) {
    e_fname.textContent = "Enter a valid first name";
    fname.classList.add("is-invalid");
    valid = false;
  }

  // Last name
  if (lname.value.trim() === "" || !namePattern.test(lname.value)) {
    e_lname.textContent = "Enter a valid last name";
    lname.classList.add("is-invalid");
    valid = false;
  }

  // Country
  if (country.value.trim() === "" || !namePattern.test(country.value)) {
    e_country.textContent = "Enter a valid country name";
    country.classList.add("is-invalid");
    valid = false;
  }

  // Address
  if (address.value.trim() === "") {
    e_address.textContent = "Address cannot be empty";
    address.classList.add("is-invalid");
    valid = false;
  }

  // City
  if (city.value.trim() === "" || !namePattern.test(city.value)) {
    e_city.textContent = "Enter a valid city name";
    city.classList.add("is-invalid");
    valid = false;
  }

  // State
  if (state.value.trim() === "" || !namePattern.test(state.value)) {
    e_state.textContent = "Enter a valid state name";
    state.classList.add("is-invalid");
    valid = false;
  }

  // Pincode
  if (!pinPattern.test(pincode.value.trim())) {
    e_pincode.textContent = "Enter a valid 6-digit pincode";
    pincode.classList.add("is-invalid");
    valid = false;
  }

  // Phone
  if (!phonePattern.test(phone.value.trim())) {
    e_phone.textContent = "Enter a valid 10-digit phone number";
    phone.classList.add("is-invalid");
    valid = false;
  }

  // Email
  if (!emailPattern.test(email.value.trim())) {
    e_email.textContent = "Enter a valid email address";
    email.classList.add("is-invalid");
    valid = false;
  }

  return valid;
}

function checkoutvalidate() {
    let valid = true;

    const fname = document.getElementById("first-name");
    const lname = document.getElementById("last-name");
    const country = document.getElementById("country");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const pincode = document.getElementById("pincode");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    const e_fname = document.getElementById("e_fname");
    const e_lname = document.getElementById("e_lname");
    const e_country = document.getElementById("e_country");
    const e_address = document.getElementById("e_address");
    const e_city = document.getElementById("e_city");
    const e_state = document.getElementById("e_state");
    const e_pincode = document.getElementById("e_pincode");
    const e_phone = document.getElementById("e_phone");
    const e_email = document.getElementById("e_email");

    [e_fname, e_lname, e_country, e_address, e_city, e_state, e_pincode, e_phone, e_email]
        .forEach(e => e.textContent = "");
    [fname, lname, country, address, city, state, pincode, phone, email]
        .forEach(i => i.classList.remove("is-invalid"));

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const pinPattern = /^[0-9]{6}$/;

    if (fname.value.trim() === "" || !namePattern.test(fname.value)) {
        e_fname.textContent = "Enter a valid first name";
        fname.classList.add("is-invalid");
        valid = false;
    }

    if (lname.value.trim() === "" || !namePattern.test(lname.value)) {
        e_lname.textContent = "Enter a valid last name";
        lname.classList.add("is-invalid");
        valid = false;
    }

    if (country.value.trim() === "" || !namePattern.test(country.value)) {
        e_country.textContent = "Enter a valid country name";
        country.classList.add("is-invalid");
        valid = false;
    }

    if (address.value.trim() === "") {
        e_address.textContent = "Address cannot be empty";
        address.classList.add("is-invalid");
        valid = false;
    }

    if (city.value.trim() === "" || !namePattern.test(city.value)) {
        e_city.textContent = "Enter a valid city name";
        city.classList.add("is-invalid");
        valid = false;
    }

    if (state.value.trim() === "" || !namePattern.test(state.value)) {
        e_state.textContent = "Enter a valid state name";
        state.classList.add("is-invalid");
        valid = false;
    }

    if (!pinPattern.test(pincode.value.trim())) {
        e_pincode.textContent = "Enter a valid 6-digit pincode";
        pincode.classList.add("is-invalid");
        valid = false;
    }

    if (!phonePattern.test(phone.value.trim())) {
        e_phone.textContent = "Enter a valid 10-digit phone number";
        phone.classList.add("is-invalid");
        valid = false;
    }

    if (!emailPattern.test(email.value.trim())) {
        e_email.textContent = "Enter a valid email address";
        email.classList.add("is-invalid");
        valid = false;
    }

    return valid;
}