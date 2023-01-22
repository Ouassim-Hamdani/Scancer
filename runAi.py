from keras.models import load_model
import imutils
import cv2
import numpy as np
import sys
def crop_brain_contour(image):
    
    # Convert the image to grayscale, and blur it slightly
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    
    thresh = cv2.threshold(gray, 45, 255, cv2.THRESH_BINARY)[1]
    thresh = cv2.erode(thresh, None, iterations=2)
    thresh = cv2.dilate(thresh, None, iterations=2)

    # Find contours in thresholded image, then grab the largest one
    cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key=cv2.contourArea)
    # extreme points
    extLeft = tuple(c[c[:, :, 0].argmin()][0])
    extRight = tuple(c[c[:, :, 0].argmax()][0])
    extTop = tuple(c[c[:, :, 1].argmin()][0])
    extBot = tuple(c[c[:, :, 1].argmax()][0])
    
    # crop new image out of the original image using the four extreme points (left, right, top, bottom)
    new_image = image[extTop[1]:extBot[1], extLeft[0]:extRight[0]]            
    
    return new_image

model = load_model("model.h5")
def predictCancer(imageBin,ext="png"):
    with open("tempImg."+ext,"wb") as img:
        img.write(imageBin)
    img_width, img_height = (240, 240)
    image = cv2.imread("tempImg."+ext)
    image = crop_brain_contour(image)
    image = cv2.resize(image, dsize=(img_width, img_height), interpolation=cv2.INTER_CUBIC)
    # normalize values
    image = image / 255.
    # convert image to numpy array and append it to X
    x = np.array([image])
    prediction = model.predict(x)
    if (prediction[0][0]>0.5):
        a="Positive"
        print(a)
        sys.stdout.flush()
        return True
    a="Negative"
    print(a)
    sys.stdout.flush()
    return False

try:
    predictCancer(sys.argv[1],sys.argv[2])
except:
    raise AttributeError("Not sufficant arguments!")