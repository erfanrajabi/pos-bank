exports.TRANSACTION_TYPES = {
    AUTHORIZATION: "0",// Autorización
    PRE_AUTHORIZATION: "1",// Preautorización
    CONFIRMATION: "2",// Confirmación de preautorización
    AUTO_REFUND: "3",// Devolución Automática
    RECURRING_TRANSACTION: "5",// Transacción Recurrente
    SUCCESSIVE_TRANSACTION: "6",// Transacción Sucesiva
    PRE_AUTHENTICATION: "7",// Pre-autenticación
    PRE_AUTHENTICATION_CONFIRMATION: "8",// Confirmación de pre-autenticación
    PRE_AUTHORIZATION_CANCEL: "9",// Anulación de Preautorización
    DEFERRED_AUTHORIZATION: "O",// Autorización en diferido
    DEFERRED_AUTHORIZATION_CONFIRMATION: "P",// Confirmación de autorización en diferido
    DEFERRED_AUTHORIZATION_CANCEL: "Q",// Anulación de autorización en diferido
    DEFERRED_INITIAL_FEE: "R",// Cuota inicial diferido
    DEFERRED_SUCCESSIVE_FEE: "S" // Cuota sucesiva diferido
};

// ISO 4217
exports.CURRENCIES = {
    EUR: "978",
    USD: "840",
    GBP: "826",
    JPY: "392",
    RUB: "643"
};
