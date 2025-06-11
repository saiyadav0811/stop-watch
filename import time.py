import time

def stopwatch():
    print("Simple Stopwatch")
    print("Press ENTER to start. Press ENTER again to stop.")
    print("Press Ctrl+C to exit.")
    
    try:
        while True:
            input("Press ENTER to start")
            start_time = time.time()
            print("Stopwatch started...")

            input("Press ENTER to stop")
            end_time = time.time()

            elapsed_time = end_time - start_time
            print(f"Elapsed Time: {round(elapsed_time, 2)} seconds\n")
    except KeyboardInterrupt:
        print("\nStopwatch exited.")

if __name__ == "__main__":
    stopwatch()
