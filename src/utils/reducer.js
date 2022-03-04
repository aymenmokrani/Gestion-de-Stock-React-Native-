export const initialState = {
    msweats: {
        inPrice: 750,
        outPrice: 1400,
        benefit: 650,
        sold: 13,
    },
    mtshirts: {
        inPrice: 550,
        outPrice: 1000,
        benefit: 450,
        sold: 11
    },
    charges: {
        negociation: 1000,
        transport: 1000,
        ads: 2000,
        spends: 2000
    }
}



const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SWEATS":
            return {
                ...state, 
                msweats: {
                    ...state.msweats,
                    sold: action.payload
                }
            };
        case "SET_TSHIRTS":
            return {
                ...state,
                mtshirts: {
                    ...state.mtshirts,
                    sold: action.payload
                }
            };
        case "SET_NEGOCIATION":
            return {
                ...state,
                charges : {
                    ...state.charges,
                    negociation: action.payload
                }
            };
        case "SET_TRANSPORT":
            return {
                ...state,
                charges : {
                    ...state.charges,
                    transport: action.payload
                }
            };
        case "SET_ADS":
            return {
                ...state,
                charges : {
                    ...state.charges,
                    ads: action.payload
                }
            };
        case "SET_SPENDS":
        return {
            ...state,
            charges : {
                ...state.charges,
                spends: action.payload
            }
        };
        default: return state;
    }
};

export default reducer;