---
title: Avoid dead code
benefit: 2
easiness: 3
order: 3
tags:
    - Clean Code
---

Don't leave commented out blocks in your code.
If for some reason you want to do so, then leave a comment at the top explaining your reason ; otherwise it is very hard for readers to know what the purpose of that code is and what to do with it : is it still relevant ? is it another option ? or is it just junk ?

Example from real code from a company whose name I shall not mention:

```csharp
void Start()
{
    // Utils.SetEnglishLanguage();

    // SetupSavedReportsFolder();

    // var commandLine = GetCommandLine();
    // _commandLineArguments = new CommandLineArguments(commandLine);

    // // set a specific GUID for the first report
    // if (_commandLineArguments.ContainsKey("ReportGuid"))
    //     BloombergUnityClient.Instance.ReportGuid = Guid.Parse(_commandLineArguments["ReportGuid"]);

    // // set a specific address to send the report to.
    // if (_commandLineArguments.ContainsKey("ServerAddress"))
    //     BloombergUnityClient.Instance.config.bloombergServerHost = _commandLineArguments["ServerAddress"];

    // // set a specific TCP port to send the report to.
    // if (_commandLineArguments.ContainsKey("ServerPort"))
    //     BloombergUnityClient.Instance.config.bloombergServerPort = Convert.ToUInt16(_commandLineArguments["ServerPort"]);

    // // set the Transmission mode to be use to send the report
    // if (_commandLineArguments.ContainsKey("TransmissionMode"))
    //     BloombergUnityClient.Instance.config.transmissionMode = (BloombergTransmissionMode) Enum.Parse(typeof(BloombergTransmissionMode), _commandLineArguments["TransmissionMode"]);

    // // URL to use to get temporary access to write objects (breport)
    // if (_commandLineArguments.ContainsKey("S3_MainAPIUrl"))
    //     BloombergUnityClient.Instance.S3_MainAPIUrl = _commandLineArguments["S3_MainAPIUrl"];

    // // MyServices specific to initialize the session
    // if (_commandLineArguments.ContainsKey("US_ApplicationId"))
    // {
    //     try
    //     {
    //         _myServices = new MyServices();
    //         _myServices?.Initialize(_commandLineArguments["US_ApplicationId"], _commandLineArguments["US_Email"], _commandLineArguments["US_Password"]);
    //     }
    //     catch (Exception e)
    //     {
    //         Debug.LogWarning($"MyServices creation failed /r/n {e}");
    //     }
    // }

    BloombergBootstrap.Bootstrap();
    Reporter.Initialize();
    SetCommandLine();
    SetSettings();
    Application.logMessageReceivedThreaded += OnLog;
}
```