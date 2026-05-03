function Component()
{
    component.setUpdateAvailable(false);
    installer.installationStarted.connect(this, Component.prototype.onInstallationStarted);
}

Component.prototype.onInstallationStarted = function()
{
    if (component.updateRequested() || component.installationRequested()) {
        if (systemInfo.kernelType === "darwin") {
            var uninstaller = installer.value("MaintenanceToolName") + ".app";

            component.installerbaseBinaryPath = "@TargetDir@/" + uninstaller;
            installer.setInstallerBaseBinary(component.installerbaseBinaryPath);
        }
    }
}
