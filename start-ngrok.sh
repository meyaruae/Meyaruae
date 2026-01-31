#!/bin/bash

# Start ngrok tunnel for React app
echo "🚀 Starting ngrok tunnel for your React app..."
echo "📱 Your app will be available at the ngrok URL shown below"
echo "🔗 Make sure your React app is running on port 3001"
echo ""

# Start ngrok
ngrok http 3001
