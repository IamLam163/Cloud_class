### Shell Scripts

A shell script is a file containing a series of commands that you could normally type in a command line. Writing shell scripts helps automate tasks, streamline complex workflows, and simplify repetitive operations. Shell scripts use the **Bash** shell by default in most Linux systems.

#### 1. **Basics of Shell Scripting**

1. **Shebang**: The first line of a shell script typically starts with a shebang (`#!`) to specify the path of the interpreter that should execute the script. For a bash shell script, this is usually:

   ```bash
   #!/bin/bash
   ```

2. **Variables**: Variables can be defined and used to store data.

   ```bash
   NAME="John"
   echo "Hello, $NAME!"
   ```

3. **Control Structures**: You can use loops and conditionals.

   ```bash
   if [ $NAME == "John" ]; then
     echo "Hello, John!"
   fi
   ```

4. **Comments**: Comments start with `#` and are ignored by the interpreter.
   ```bash
   # This is a comment
   ```

#### 2. **Creating and Running a Script**

1. **Create a new file** with a `.sh` extension, e.g., `myscript.sh`.
2. **Add executable permission** using `chmod`:
   ```bash
   chmod +x myscript.sh
   ```
3. **Run the script**:
   ```bash
   ./myscript.sh
   ```

### Example 1: A Basic "Hello, World!" Script

This script prints "Hello, World!" and demonstrates the basic structure.

```bash
#!/bin/bash
# A simple Hello World script

echo "Hello, World!"
```

- **Explanation**:
  - `#!/bin/bash` specifies that this script should be run using the Bash shell.
  - `echo` prints text to the console.

#### Usage

Create a file called `hello.sh` with the above content, make it executable (`chmod +x hello.sh`), and run it (`./hello.sh`).

### Example 2: A Script to Backup Files

This script takes a directory path as an argument and backs up its contents to a `.tar.gz` archive with a timestamp.

```bash
#!/bin/bash
# Backup Script

# Check if directory path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 directory_path"
  exit 1
fi

# Variables
DIR_TO_BACKUP=$1
BACKUP_NAME="backup_$(basename $DIR_TO_BACKUP)_$(date +%Y%m%d_%H%M%S).tar.gz"

# Create a backup
tar -czf $BACKUP_NAME $DIR_TO_BACKUP

# Check if backup was successful
if [ $? -eq 0 ]; then
  echo "Backup successful! File: $BACKUP_NAME"
else
  echo "Backup failed!"
fi
```

- **Explanation**:
  - `DIR_TO_BACKUP=$1` assigns the first command-line argument to `DIR_TO_BACKUP`.
  - `BACKUP_NAME` creates a dynamic file name based on the directory name and timestamp.
  - `tar -czf` compresses the directory.
  - `$?` stores the exit status of the last command, used to check if the backup was successful.

#### Usage

Create a file called `backup.sh`, make it executable (`chmod +x backup.sh`), and run it with a directory path, like so:

```bash
./backup.sh /path/to/directory
```

### Example 3: System Monitoring Script

This script monitors system resource usage (CPU, memory) and sends an alert if usage exceeds a certain threshold.

```bash
#!/bin/bash
# System Monitoring Script

# Thresholds
CPU_THRESHOLD=80
MEM_THRESHOLD=80

# Get CPU and Memory Usage
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')
MEM_USAGE=$(free | grep Mem | awk '{print $3/$2 * 100.0}')

# Check if usage exceeds thresholds
if (( $(echo "$CPU_USAGE > $CPU_THRESHOLD" | bc -l) )); then
  echo "Warning: CPU usage is above $CPU_THRESHOLD%! Current usage: $CPU_USAGE%"
fi

if (( $(echo "$MEM_USAGE > $MEM_THRESHOLD" | bc -l) )); then
  echo "Warning: Memory usage is above $MEM_THRESHOLD%! Current usage: $MEM_USAGE%"
fi
```

- **Explanation**:
  - `CPU_USAGE` extracts the current CPU usage using `top` and some text processing commands (`sed` and `awk`).
  - `MEM_USAGE` calculates memory usage using the `free` command.
  - The script then checks if the usage values exceed the defined thresholds and outputs a warning if they do.

#### Usage

Create a file called `monitor.sh`, make it executable (`chmod +x monitor.sh`), and run it:

```bash
./monitor.sh
```

### Key Points to Remember

- **Variables**: Assign values to variables without spaces around the `=` sign, e.g., `VAR=value`.
- **Loops**: Use `for`, `while`, and `until` loops.
- **Conditionals**: Use `if`, `elif`, `else`, and `case`.
- **Functions**: Define reusable blocks of code within a script.
