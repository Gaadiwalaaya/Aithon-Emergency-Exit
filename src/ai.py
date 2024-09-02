import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Data
X = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reshape(-1, 1)
Y = np.array([10, 23, 30, 45, 50, 62, 70, 79, 94, 105])

# Train model
model = LinearRegression()
model.fit(X, Y)

# Predict
prediction = model.predict(np.array([5]).reshape(-1, 1))
print(f"Prediction for X=5: {prediction[0]}")

# Save the model
joblib.dump(model, 'trained_model.joblib')