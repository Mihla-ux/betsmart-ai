const { handler } = require('serverless-api');

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const userBetslip = body.betslip;

        // Call to Anthropic Claude API to generate slip
        const response = await generateSlipWithClaude(userBetslip);

        return {
            statusCode: 200,
            body: JSON.stringify({ slip: response }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate betslip' }),
        };
    }
};

async function generateSlipWithClaude(betslip) {
    // Placeholder for API call to Anthropic Claude
    const response = await fetch('https://api.anthropic.com/v1/claude/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({ betslip })
    });
    const data = await response.json();
    return data;
}