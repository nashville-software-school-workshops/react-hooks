# List of supported React hooks
HOOKS := useState useEffect useCallback useMemo useReducer useRef useContext useTransition useDeferredValue use errorBoundaries suspense

# Declare these as phony targets (i.e., not real files)
.PHONY: $(HOOKS) empty list

# Copy the appropriate src directory into ./code/src
$(HOOKS):
	@echo "Resetting ./code/src and loading challenge for '$@'..."
	@rm -rf code/src
	@cp -r chapters/$@/challenge/src code/src
	@echo "✅ Done. You can now run 'npm start'."

# Clean up the ./code/src folder
empty:
	@echo "Removing ./code/src..."
	@rm -rf code/src
	@echo "✅ Empty."

# List all valid targets
list:
	@echo "Available targets:"
	@for hook in $(HOOKS); do echo "  make $$hook"; done
	@echo "  make empty"
