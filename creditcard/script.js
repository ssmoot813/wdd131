const form = document.getElementById("ccForm");
const message = document.getElementById("message");
const frontMessage = document.getElementById("frontMessage");

const cardNumber = document.getElementById("cardNumber");
const cardHolder = document.getElementById("cardHolder");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

function setStatus(text, ok = true) {
    message.textContent = text;
    message.style.color = ok ? "rgba(0,0,0,0.65)" : "#b30000";
}

function setFrontStatus(text, ok = true) {
    frontMessage.textContent = text;
    frontMessage.style.color = ok ? "rgba(0,0,0,0.65)" : "#b30000";
}

function digitsOnly(str) {
    return str.replace(/\D/g, "");
}

function markInvalid(el, isInvalid) {
    el.classList.toggle("invalid", isInvalid);
    if (isInvalid) el.setAttribute("aria-invalid", "true");
    else el.removeAttribute("aria-invalid");
}

cardNumber.addEventListener("input", () => {
    const digits = digitsOnly(cardNumber.value).slice(0, 16);
    const grouped = digits.replace(/(.{4})/g, "$1 ").trim();
    cardNumber.value = grouped;
    setFrontStatus("");
});

function isValidCardNumberExact() {
    return digitsOnly(cardNumber.value) === "1234123412341234";
}

function isNotExpired(mm, yy) {
    const m = Number(mm);
    const y = Number(yy);

    if (!Number.isInteger(m) || !Number.isInteger(y)) return false;
    if (m < 1 || m > 12) return false;

    const now = new Date();
    const currentYearYY = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (y > currentYearYY) return true;
    if (y < currentYearYY) return false;
    return m >= currentMonth;
}

function validateAll() {
    let ok = true;

    const fields = [cardNumber, cardHolder, month, year, cvc];
    for (const f of fields) {
        const invalid = !f.checkValidity();
        markInvalid(f, invalid);
        if (invalid) ok = false;
    }

    if (ok && !isValidCardNumberExact()) {
        ok = false;
        markInvalid(cardNumber, true);
        setFrontStatus("Card number must be exactly 1234 1234 1234 1234.", false);
    } else if (ok) {
        setFrontStatus("");
    }

    if (ok && !isNotExpired(month.value, year.value)) {
        ok = false;
        markInvalid(month, true);
        markInvalid(year, true);
        setFrontStatus("Card is expired. Please enter a valid future date.", false);
    }

    return ok;
}

[month, year].forEach((el) => {
    el.addEventListener("input", () => {
        if (month.value.length === 2 && year.value.length === 2) {
            const ok = isNotExpired(month.value, year.value);
            setFrontStatus(ok ? "" : "Card is expired. Please enter a valid future date.", ok);
        } else {
            setFrontStatus("");
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    setStatus("");

    const ok = validateAll();
    if (!ok) {
        setStatus("Please fix the highlighted fields and try again.", false);
        return;
    }

    setStatus("✅ Payment accepted! Thanks — your form validated correctly.", true);

});