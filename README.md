# Next.js Image Import Error

This repository demonstrates a common error in Next.js applications related to image imports.  The `/about` page attempts to load an image that does not exist, causing a runtime error on the client-side. The solution involves robust error handling and potentially better image management.

## Bug Description

The application crashes when navigating to the `/about` page because of a missing image source.  This happens due to a lack of error handling around the image import.  A production-ready application should gracefully handle such scenarios.

## Solution

The solution involves adding error handling to prevent the application crash.  This can be done by wrapping the image import in a try-catch block or using a conditional rendering approach to only display the image if it exists.