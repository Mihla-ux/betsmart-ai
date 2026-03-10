const { getClaudeResponse } = require('../utils/claudeClient');

exports.handler = async (event, context) => {
    const { body } = event;
    const { userInput } = JSON.parse(body);

    // Validate input
    if (!userInput) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'User input is required.' }),
        };
    }

    try {
        // Call the Claude API to generate a parlay
        const response = await getClaudeResponse(userInput);

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate parlay.' }),
        };
    }
};
